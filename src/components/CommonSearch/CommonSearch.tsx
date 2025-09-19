import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuMic } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { RaphaPlusCommonSearchStyled } from "./CommonSearch.styled";
import { FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface SearchItem {
  name: string;
  img: string;
  data: any;
  key?: string;
}

type SearchAPIFunction = (searchTerm: string) => Promise<any> | any;

type SearchDataHandler = (payload: any) => SearchItem[];

interface SearchAPIConfig {
  api: SearchAPIFunction;
  onSearchData: SearchDataHandler;
  key: string;
}

interface CommonSearchProps {
  placeHolderText?: string[];
  value?: string;
  setSearchText?: (text: string) => void;
  autoComplete?: boolean;
  searchAPI?: SearchAPIConfig | SearchAPIConfig[];
  sectionName?: string;
  handleSelect?: (selectedItem: SearchItem | string) => void;
  enableAPISelection?: boolean;
}

const ALLOWED_AUTOCOMPLETE_SECTIONS = ["global-search"] as const;
const DEBOUNCE_DELAY = 500;
const MIN_SEARCH_LENGTH = 0;

const isSearchAPIConfigArray = (
  searchAPIs: any
): searchAPIs is SearchAPIConfig[] => {
  return (
    Array.isArray(searchAPIs) &&
    searchAPIs.length > 0 &&
    typeof searchAPIs[0] === "object" &&
    "api" in searchAPIs[0] &&
    "onSearchData" in searchAPIs[0] &&
    "key" in searchAPIs[0]
  );
};

const isSearchAPIConfig = (searchAPI: any): searchAPI is SearchAPIConfig => {
  return (
    typeof searchAPI === "object" &&
    "api" in searchAPI &&
    "onSearchData" in searchAPI &&
    "key" in searchAPI
  );
};

const normalizeSearchConfig = (
  searchAPIs: SearchAPIConfig | SearchAPIConfig[] | undefined
): {
  apis: SearchAPIFunction[];
  handlers: SearchDataHandler[];
  keys: string[];
} => {
  if (!searchAPIs) return { apis: [], handlers: [], keys: [] };

  let configs: SearchAPIConfig[];

  if (isSearchAPIConfigArray(searchAPIs)) {
    configs = searchAPIs;
  } else if (isSearchAPIConfig(searchAPIs)) {
    configs = [searchAPIs];
  } else {
    return { apis: [], handlers: [], keys: [] };
  }

  const apis = configs.map((config) => config.api);
  const handlers = configs.map((config) => config.onSearchData);
  const keys = configs.map((config) => config.key);

  return { apis, handlers, keys };
};

const CommonSearch: React.FC<CommonSearchProps> = ({
  placeHolderText,
  value,
  setSearchText,
  autoComplete,
  searchAPI,
  sectionName,
  handleSelect,
  enableAPISelection = false,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const recognitionRef = useRef<any>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const searchAPIRef = useRef(searchAPI);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Update refs when props change
  useEffect(() => {
    searchAPIRef.current = searchAPI;
  }, [searchAPI]);

  // State variables
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<SearchItem[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [showSearchPopupModel, setShowSearchPopupModel] =
    useState<boolean>(false);
  const [selectedSearch, setSelectedSearch] = useState<number>(0);
  const [selectedAPIIndex, setSelectedAPIIndex] = useState<number>(0);

  // Memoized values
  const isAutocompleteAllowed = useMemo(
    () =>
      autoComplete &&
      sectionName &&
      ALLOWED_AUTOCOMPLETE_SECTIONS.includes(
        sectionName as (typeof ALLOWED_AUTOCOMPLETE_SECTIONS)[number]
      ),
    [autoComplete, sectionName]
  );

  const isSpeechRecognitionSupported = useMemo(
    () => "webkitSpeechRecognition" in window,
    []
  );

  // API configuration for selection dropdown
  const apiSelectionConfig = useMemo(() => {
    if (!enableAPISelection || !searchAPI) return null;

    const { apis, handlers, keys } = normalizeSearchConfig(searchAPI);

    return {
      apis,
      handlers,
      keys,
      showSelection: apis.length > 1,
    };
  }, [enableAPISelection, searchAPI]);

  // Initialize component state
  useEffect(() => {
    const globalSearch = searchParams.get("globalsearch");
    if (globalSearch) {
      setSearchTerm(globalSearch);
    } else {
      setSearchTerm("");
    }
  }, [searchParams]);

  useEffect(() => {
    setSearchText?.(searchTerm);
  }, [searchTerm, setSearchText]);

  useEffect(() => {
    if (
      placeHolderText &&
      placeHolderText.length > 0 &&
      searchInputRef.current
    ) {
      let index = 1;
      searchInputRef.current.setAttribute(
        "placeholder",
        `Search '${placeHolderText?.[0] || ""}'`
      );
      const timer = window.setInterval(() => {
        searchInputRef.current?.setAttribute(
          "placeholder",
          `Search '${placeHolderText[index] || ""}'`
        );
        index = (index + 1) % placeHolderText.length;
      }, 4000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [placeHolderText]);

  // Cleanup function for speech recognition
  const cleanupSpeechRecognition = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
      recognitionRef.current = null;
    }
  }, []);

  // Reset selected search when data changes
  useEffect(() => {
    if (autoComplete) {
      setSelectedSearch(0);
    }
  }, [searchData, autoComplete]);

  // Search debounce effect
  useEffect(() => {
    // Clear previous timeout and abort controller
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }

    if (
      isAutocompleteAllowed &&
      searchAPIRef.current &&
      searchTerm.length >= MIN_SEARCH_LENGTH &&
      showSearchPopupModel
    ) {
      abortControllerRef.current = new AbortController();
      const controller = abortControllerRef.current;
      const currentSearchTerm = searchTerm;

      setLoading(true);
      setError(false);
      setSearchData(null);

      debounceRef.current = setTimeout(async () => {
        if (!searchAPIRef.current || controller.signal.aborted) return;

        try {
          const { apis, handlers, keys } = normalizeSearchConfig(
            searchAPIRef.current
          );

          if (apis.length === 0) {
            setError(true);
            setSearchData([]);
            return;
          }

          // Determine which APIs to execute based on selection
          let apisToExecute = apis;
          let handlersToExecute = handlers;
          let keysToExecute = keys;

          if (
            enableAPISelection &&
            selectedAPIIndex >= 0 &&
            selectedAPIIndex < apis.length
          ) {
            // Use only the selected API
            apisToExecute = [apis[selectedAPIIndex]];
            handlersToExecute = [handlers[selectedAPIIndex]];
            keysToExecute = [keys[selectedAPIIndex]];
          } else if (enableAPISelection) {
            // If enableAPISelection is true but no valid selection, use first API as default
            apisToExecute = [apis[0]];
            handlersToExecute = [handlers[0]];
            keysToExecute = [keys[0]];
          }

          // Execute search APIs (either all or selected one)
          const searchPromises = apisToExecute.map(
            async (searchAPIFunc, index) => {
              try {
                const result = await searchAPIFunc(currentSearchTerm);

                if (controller.signal.aborted) return null;

                if (
                  result?.meta?.requestStatus &&
                  (result?.error || result?.meta?.requestStatus !== "fulfilled")
                ) {
                  console.warn(
                    `Search API ${index + 1} (${keysToExecute[index]}) failed:`,
                    result.error
                  );
                  return null;
                } else {
                  const handler = handlersToExecute[index];
                  const processedData = handler(result) ?? [];

                  // Add the key to each search item to identify its source
                  return processedData.map((item: SearchItem) => ({
                    ...item,
                    key: keysToExecute[index],
                  }));
                }
              } catch (error) {
                console.error(
                  `Search API ${index + 1} (${keysToExecute[index]}) error:`,
                  error
                );
                return null;
              }
            }
          );

          const results = await Promise.all(searchPromises);

          if (controller.signal.aborted) return;

          // Filter out null results (failed APIs) and combine all successful results
          const combinedData = results
            .filter((result) => result !== null && Array.isArray(result))
            .flat() as SearchItem[];

          setSearchData(combinedData);

          // Set error only if all APIs failed
          if (
            combinedData.length === 0 &&
            results.every((result) => result === null)
          ) {
            setError(true);
          }
        } catch (error) {
          if (!controller.signal.aborted) {
            console.error("Search error:", error);
            setError(true);
            setSearchData([]);
          }
        } finally {
          if (!controller.signal.aborted) {
            setLoading(false);
          }
        }
      }, DEBOUNCE_DELAY);
    } else {
      setLoading(false);
      if (!showSearchPopupModel) {
        setSearchData(null);
      }
    }

    // Cleanup function
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
    };
  }, [
    searchTerm,
    isAutocompleteAllowed,
    dispatch,
    enableAPISelection,
    selectedAPIIndex,
    showSearchPopupModel,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupSpeechRecognition();
      // Cleanup timeouts and requests
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
    };
  }, [cleanupSpeechRecognition]);

  // Voice input handler
  const handleVoiceInput = useCallback(() => {
    if (!isSpeechRecognitionSupported) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }

    setSearchTerm("");
    cleanupSpeechRecognition();

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      setSearchTerm(speechToText);
      setSearchText?.(speechToText);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      alert("Mic is already enabled. You can start talking.");
    };

    recognition.onend = () => {
      recognitionRef.current = null;
    };

    recognition.start();
  }, [isSpeechRecognitionSupported, cleanupSpeechRecognition, setSearchText]);

  // Input change handler
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchTerm(value);
    },
    [setSearchTerm]
  );

  // Hide search popup handler
  const handleHide = useCallback(() => {
    setShowSearchPopupModel(false);
    setSearchData(null);
    setLoading(false);
    setError(false);
  }, []);

  // Clear search handler
  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setSearchParams(
      (prev) => {
        prev.delete("globalsearch");
        return prev;
      },
      { replace: true }
    );
    handleHide?.();
  }, [setSearchParams, handleHide]);

  // Open search popup handler
  const handleOpen = useCallback(() => {
    setShowSearchPopupModel(true);
  }, []);
  // Search item click handler
  const handleSearchClick = useCallback(
    (item: SearchItem) => {
      handleSelect?.(item);
      handleHide();
    },
    [handleSelect, handleHide]
  );

  // API selection handlers
  const handleAPISelect = useCallback(
    (index: number) => {
      setSelectedAPIIndex(index);
      // Clear current search data to trigger new search with selected API
      if (searchTerm.length >= MIN_SEARCH_LENGTH) {
        setSearchData(null);
      }
    },
    [searchTerm.length]
  );

  // Keyboard navigation handler
  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!autoComplete) return;

      switch (e.code) {
        case "Enter":
          e.preventDefault();
          (e.target as HTMLInputElement).blur();
          if (
            selectedSearch > 0 &&
            selectedSearch <= (searchData?.length || 0)
          ) {
            handleSearchClick(searchData![selectedSearch - 1]);
          }
          break;

        case "ArrowDown":
          e.preventDefault();
          setSelectedSearch((prev) =>
            prev < (searchData?.length || 0) ? prev + 1 : 1
          );
          break;

        case "ArrowUp":
          e.preventDefault();
          setSelectedSearch((prev) =>
            prev === 1 ? searchData?.length || 0 : prev - 1
          );
          break;

        case "Escape":
          e.preventDefault();
          handleHide();
          break;
      }
    },
    [autoComplete, searchData, selectedSearch, handleHide, handleSearchClick]
  );

  const isShow = useMemo(
    () =>
      autoComplete &&
      ALLOWED_AUTOCOMPLETE_SECTIONS.includes(
        sectionName as (typeof ALLOWED_AUTOCOMPLETE_SECTIONS)[number]
      ) &&
      showSearchPopupModel,
    [autoComplete, sectionName, showSearchPopupModel]
  );

  return (
    <RaphaPlusCommonSearchStyled>
      <div
        onClick={handleHide}
        className={`fixed-container ${isShow ? "" : "fixed-container-hidden"}`}
      />

      {/* API Selection Buttons */}
      {apiSelectionConfig?.showSelection && (
        <div className="api-selection-container">
          <div className="api-selection-buttons">
            {apiSelectionConfig.keys.map((key, index) => (
              <button
                key={key}
                type="button"
                className={`api-button ${
                  selectedAPIIndex === index ? "active" : ""
                }`}
                onClick={() => handleAPISelect(index)}
                aria-pressed={selectedAPIIndex === index}
                aria-label={`Search with ${key}`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={`search-container ${
          isShow ? "" : "search-container-hidden"
        }`}
      >
        {loading ? (
          <div className="text-center mb-3" role="status" aria-live="polite">
            <Spin
              indicator={<LoadingOutlined spin style={{ fontSize: 40 }} />}
            />
            <span className="sr-only">Loading search results...</span>
          </div>
        ) : searchData && searchData.length > 0 ? (
          searchData.map((item: SearchItem, i: number) => (
            <div
              key={item?.data?.id}
              onClick={() => handleSearchClick(item)}
              className={`search-items search-items-border ${
                selectedSearch === i + 1 ? "selected-search" : ""
              }`}
              role="option"
              aria-selected={selectedSearch === i + 1}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSearchClick(item);
                }
              }}
            >
              <p>{item?.name}</p>
              <FaChevronRight size={22} className="right-btn" />
            </div>
          ))
        ) : (
          searchTerm?.length > 0 && (
            <p className="text-center" role="status">
              No Result found
            </p>
          )
        )}
      </div>

      <div className="search-bar" role="search">
        {searchParams.get("globalsearch") || searchTerm?.length > 0 ? (
          <span
            className="clear-btn"
            onClick={clearSearch}
            role="button"
            tabIndex={0}
            aria-label="Clear search"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                clearSearch();
              }
            }}
          >
            X
          </span>
        ) : (
          <IoSearchOutline
            className="searchicon search-icon"
            role="button"
            tabIndex={0}
            aria-label="Search"
          />
        )}
        <input
          type="text"
          ref={searchInputRef}
          onKeyDown={handleKey}
          onClick={handleOpen}
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
          aria-label="Search input"
          aria-expanded={isShow}
          aria-autocomplete={autoComplete ? "list" : "none"}
          autoComplete="off"
        />
        <LuMic
          className="searchicon mic-icon mic-icon-new-x"
          onClick={handleVoiceInput}
          role="button"
          tabIndex={0}
          aria-label="Voice search"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleVoiceInput();
            }
          }}
        />
      </div>
    </RaphaPlusCommonSearchStyled>
  );
};

export default CommonSearch;
