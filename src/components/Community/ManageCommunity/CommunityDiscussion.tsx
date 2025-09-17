import {
  createCommunityPostAPI,
  deleteCommunityPostAPI,
  getAllCommunityPostsByIdAPI,
  updateCommunityPostAPI,
} from "@/redux/slices/community/communityService";
import React, { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import useUploadToS3 from "@/hooks/useUploadToS3";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import CustomPagination from "@/components/custom/Table/CustomTable/Pagination/CustomPagination";
import { useParams } from "react-router";
import moment from "moment";
import { Image } from "antd";

interface Post {
  id: number;
  community_id: number;
  parent_post_id: number | null;
  post_type: "post" | "reply";
  text: string;
  image_url: string[];
  video_url: string | null;
  status: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    image: string;
  };
  created_at: string;
  replies?: Post[];
}

const CommunityDiscussion = () => {
  // currentCommunity :- original community data if it exists, usually has all fields
  const { communityId } = useParams();
  const dispatch: any = useDispatch();
  const { user } = useSelector(({ auth }: any) => auth);
  const { uploadToS3 } = useUploadToS3();

  // State for post creation
  const [postContent, setPostContent] = useState("");
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);

  // State for replies
  const [replyContent, setReplyContent] = useState<{ [key: number]: string }>(
    {}
  );
  const [showReplyForm, setShowReplyForm] = useState<{
    [key: number]: boolean;
  }>({});

  // State for editing posts
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editPostContent, setEditPostContent] = useState<string>("");

  // State for posts - will be populated from API
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);

  // File input refs
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Handle multiple image upload
  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        try {
          setIsUploading(true);
          const filesArray = Array.from(files);
          toast.success(`Uploading ${filesArray.length} images...`);

          const uploadPromises = filesArray.map(async (file) => {
            const url = await uploadToS3(file, user?.id);
            return url;
          });

          const uploadedUrls = await Promise.all(uploadPromises);
          const validUrls = uploadedUrls.filter(Boolean);
          setSelectedImages((prev) => [...prev, ...validUrls]);

          toast.success("Images uploaded successfully!");
        } catch (error) {
          toast.error("Error uploading images. Please try again.");
        } finally {
          setIsUploading(false);
        }
      }
    },
    [uploadToS3, user?.id]
  );

  // Handle single video upload
  const handleVideoUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        try {
          setIsUploading(true);
          toast.success("Uploading video...");

          const uploadedUrl = await uploadToS3(file, user?.id);
          if (uploadedUrl) {
            setSelectedVideo(uploadedUrl);
            toast.success("Video uploaded successfully!");
          }
        } catch (error) {
          toast.error("Error uploading video. Please try again.");
        } finally {
          setIsUploading(false);
        }
      }
    },
    [uploadToS3, user?.id]
  );

  const addPostOrReply = async (parentPostId: number | null = null) => {
    const content = parentPostId ? replyContent[parentPostId] : postContent;

    if (!content?.trim()) {
      toast.error("Please enter some content");
      return;
    }

    const payload = {
      post: {
        community_id: communityId || 1,
        parent_post_id: parentPostId,
        post_type: parentPostId ? "reply" : "post",
        text: content,
        image_url: parentPostId ? [] : selectedImages,
        video_url: parentPostId ? null : selectedVideo,
        status: "active",
      },
    };

    try {
      const res = await dispatch(createCommunityPostAPI(payload));
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occurred");
        return;
      }

      toast.success(
        parentPostId ? "Reply added successfully" : "Post created successfully"
      );

      // Clear form data
      if (parentPostId) {
        setReplyContent((prev) => ({ ...prev, [parentPostId]: "" }));
        setShowReplyForm((prev) => ({ ...prev, [parentPostId]: false }));
      } else {
        setPostContent("");
        setSelectedImages([]);
        setSelectedVideo(null);
        setShowPostForm(false);
      }

      // Refresh posts after successful creation
      // If adding a new post (not reply), go to first page to see the new post
      if (!parentPostId) {
        setCurrentPage(1);
        await getAllCommunityPosts(1, pageSize);
      } else {
        await getAllCommunityPosts(currentPage, pageSize);
      }
    } catch (error) {
      toast.error("Error creating post. Please try again.");
    }
  };

  const updatePost = async (postId: number, content: string) => {
    if (!content?.trim()) {
      toast.error("Please enter some content");
      return;
    }

    const updatePayload = {
      post: {
        text: content,
      },
    };

    try {
      const res = await dispatch(
        updateCommunityPostAPI({ id: postId, payload: updatePayload })
      );
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occurred");
        return;
      }
      toast.success("Post updated successfully");
      setEditingPostId(null);
      setEditPostContent("");
      await getAllCommunityPosts(currentPage, pageSize);
    } catch (error) {
      toast.error("Error updating post. Please try again.");
    }
  };

  const startEditingPost = (post: Post) => {
    setEditingPostId(post.id);
    setEditPostContent(post.text);
  };

  const cancelEditingPost = () => {
    setEditingPostId(null);
    setEditPostContent("");
  };

  const deletePost = async (postId: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post? This action cannot be undone."
    );
    if (!confirmed) return;

    try {
      const res = await dispatch(deleteCommunityPostAPI(postId));
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occurred");
        return;
      }
      toast.success("Post deleted successfully");
      // Check if we need to go to previous page after deletion
      const remainingPosts = posts.length - 1;
      if (remainingPosts === 0 && currentPage > 1) {
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        await getAllCommunityPosts(newPage, pageSize);
      } else {
        await getAllCommunityPosts(currentPage, pageSize);
      }
    } catch (error) {
      toast.error("Error deleting post. Please try again.");
    }
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    try {
      const date = moment(dateString);
      const now = moment();
      const diffInMinutes = now.diff(date, "minutes");

      if (diffInMinutes < 1) return "Just now";
      if (diffInMinutes < 60)
        return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;

      const diffInHours = now.diff(date, "hours");
      if (diffInHours < 24)
        return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;

      const diffInDays = now.diff(date, "days");
      if (diffInDays < 7)
        return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;

      return date.format("MM/DD/YYYY");
    } catch {
      return dateString;
    }
  };

  const getAllCommunityPosts = async (
    page: number = currentPage,
    count: number = pageSize
  ) => {
    if (!communityId) {
      toast.error("Community not found");
      return;
    }

    setIsLoadingPosts(true);
    try {
      const res = await dispatch(
        getAllCommunityPostsByIdAPI({
          id: communityId,
          page: page,
          count: count,
          status: "active",
        })
      );
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occurred");
        return;
      }
      console.log("Posts : ", res?.payload?.data?.posts);

      // Update posts state with the data from API response
      if (res?.payload?.data?.posts && Array.isArray(res.payload.data.posts)) {
        // Map the API response to match our Post interface and filter active posts
        const formattedPosts = res.payload.data.posts.map((post: any) => ({
          id: parseInt(post.id),
          community_id: parseInt(post.community_id),
          parent_post_id: post.parent_post_id
            ? parseInt(post.parent_post_id)
            : null,
          post_type: post.post_type,
          text: post.text,
          image_url: Array.isArray(post.image_url) ? post.image_url : [],
          video_url: post.video_url,
          status: post.status,
          user: post.user,
          created_at: formatDate(post.created_at),
          replies: Array.isArray(post.replies)
            ? post.replies
                .filter((reply: any) => reply.status === "active")
                .map((reply: any) => ({
                  id: parseInt(reply.id),
                  community_id: parseInt(reply.community_id),
                  parent_post_id: reply.parent_post_id
                    ? parseInt(reply.parent_post_id)
                    : null,
                  post_type: reply.post_type,
                  text: reply.text,
                  image_url: Array.isArray(reply.image_url)
                    ? reply.image_url
                    : [],
                  video_url: reply.video_url,
                  status: reply.status,
                  user: reply.user,
                  created_at: formatDate(reply.created_at),
                }))
            : [],
        }));

        setPosts(formattedPosts);

        // Set total count for pagination
        if (res?.payload?.data?.pagination?.total) {
          setTotalPosts(res.payload?.data?.pagination?.total);
        }
      }
    } catch (error) {
      toast.error("Error fetching posts. Please try again.");
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    getAllCommunityPosts();
  }, [communityId]);

  // Handle pagination change
  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size && size !== pageSize) {
      setPageSize(size);
    }
    getAllCommunityPosts(page, size || pageSize);
  };

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
  ];

  console.log("postsnew", posts);

  return (
    <div className="discussion-content text-foreground">
      {/* Post Creation Form */}
      <div className="post-input-container bg-card dark:bg-card rounded-lg p-4 mb-6 border border-border dark:border-border flex flex-col gap-4 shadow">
        <div className="flex items-center gap-3 ">
          <div className="avatar w-10 h-10 rounded-full bg-muted dark:bg-muted flex items-center justify-center text-muted-foreground dark:text-muted-foreground overflow-hidden">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </div>
          <button
            onClick={() => setShowPostForm(true)}
            className="flex-1 py-2 px-4 rounded-full border border-input dark:border-input bg-background dark:bg-background text-sm text-left text-muted-foreground dark:text-muted-foreground hover:bg-accent dark:hover:bg-accent transition-colors"
          >
            What's on your mind?
          </button>
        </div>

        {showPostForm && (
          <div className="flex flex-col gap-4">
            <div className="border border-border dark:border-border rounded-lg">
              <ReactQuill
                theme="snow"
                value={postContent}
                onChange={setPostContent}
                modules={modules}
                formats={formats}
                placeholder="Share your thoughts..."
                className="bg-background dark:bg-background"
              />
            </div>

            {/* Image Preview */}
            {selectedImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedImages.map((url, index) => (
                  <div key={index} className="relative">
                    <Image src={url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg" />
                    <button
                      onClick={() =>
                        setSelectedImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="absolute top-2 right-2 bg-destructive dark:bg-destructive text-destructive-foreground dark:text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-destructive/80 dark:hover:bg-destructive/80"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Video Preview */}
            {selectedVideo && (
              <div className="relative">
                <video
                  src={selectedVideo}
                  controls
                  className="w-full max-h-64 rounded-lg"
                />
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-2 right-2 bg-destructive dark:bg-destructive text-destructive-foreground dark:text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-destructive/80 dark:hover:bg-destructive/80"
                >
                  ×
                </button>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row items-center justify-between">
              <div className="flex gap-4 w-full">
                <input
                  ref={imageInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                />

                <button
                  onClick={() => imageInputRef.current?.click()}
                  disabled={isUploading}
                  className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors disabled:opacity-50"
                >
                  <div className="w-5 h-5 bg-muted dark:bg-muted rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[20px]">Photo</span>
                </button>

                <button
                  onClick={() => videoInputRef.current?.click()}
                  disabled={isUploading || selectedVideo !== null}
                  className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors disabled:opacity-50"
                >
                  <div className="w-5 h-5 bg-muted dark:bg-muted rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                  </div>
                  <span className="text-[20px]">Video</span>
                </button>
              </div>

              <div className="flex justify-end w-full gap-2">
                <SecoundaryButton
                  onClick={() => {
                    setShowPostForm(false);
                    setPostContent("");
                    setSelectedImages([]);
                    setSelectedVideo(null);
                  }}
                >
                  Cancel
                </SecoundaryButton>
                <PrimaryButton
                  onClick={() => addPostOrReply()}
                  disabled={!postContent.trim() || isUploading}
                >
                  {isUploading ? "Uploading..." : "Post"}
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Posts Display */}
      <div className="posts-container flex flex-col gap-4 p-2 sm:p-4">
        {isLoadingPosts ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center gap-2 text-muted-foreground dark:text-muted-foreground">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
              <span>Loading posts...</span>
            </div>
          </div>
        ) : posts && posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="post-card bg-card dark:bg-card rounded-lg p-4 border border-border dark:border-border shadow"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="avatar w-10 h-10 rounded-full bg-muted dark:bg-muted flex items-center justify-center overflow-hidden">
                    {post.user?.image ? (
                      <img
                        src={post.user?.image}
                        alt={`${post.user?.first_name || ""} ${
                          post.user?.last_name || ""
                        }`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="12"
                          fill={`hsl(${Math.random() * 360}, 70%, 80%)`}
                        />
                        <text
                          x="50%"
                          y="50%"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          fill="#000000"
                          fontSize="10"
                          fontWeight="bold"
                        >
                          {`${user?.first_name?.[0] || ""}${
                            user?.last_name?.[0] || ""
                          }`}
                        </text>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground mb-1">
                      {`${post.user?.first_name || ""} ${
                        post.user?.last_name || ""
                      }`.trim()}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground m-0">
                      {post.created_at}
                    </p>
                  </div>
                </div>

                {/* Post Options for Author */}
                {user?.id === post.user?.id && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => startEditingPost(post)}
                      className="p-1 text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors"
                      title="Edit post"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="p-1 text-muted-foreground dark:text-muted-foreground hover:text-destructive dark:hover:text-destructive transition-colors"
                      title="Delete post"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Post Content or Edit Form */}
              {editingPostId === post.id ? (
                <div className="edit-form mb-4 space-y-3">
                  <div className="border border-border dark:border-border rounded-lg">
                    <ReactQuill
                      theme="snow"
                      value={editPostContent}
                      onChange={setEditPostContent}
                      modules={modules}
                      formats={formats}
                      placeholder="Edit your post..."
                      className="bg-background dark:bg-background"
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-3">
                    <SecoundaryButton onClick={cancelEditingPost}>
                      Cancel
                    </SecoundaryButton>
                    <PrimaryButton
                      onClick={() => updatePost(post.id, editPostContent)}
                      disabled={!editPostContent?.trim()}
                    >
                      Save
                    </PrimaryButton>
                  </div>
                </div>
              ) : (
                <div
                  className="post-content mb-4 text-foreground dark:text-foreground prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.text }}
                />
              )}

              {/* Post Media */}
              {(post.image_url?.length > 0 || post.video_url) && (
                <div className="post-media mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {post.image_url?.map((url, index) => (
                      <img
                        key={`img-${index}`}
                        src={url}
                        alt={`Post image ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                      />
                    ))}
                    {post.video_url && (
                      <video
                        src={post.video_url}
                        controls
                        className="w-full rounded-lg shadow-lg"
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Post Actions */}
              <div className="post-actions flex items-center gap-4 pt-3 border-t border-border dark:border-border">
                <button
                  onClick={() =>
                    setShowReplyForm((prev) => ({
                      ...prev,
                      [post.id]: !prev[post.id],
                    }))
                  }
                  className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>Reply</span>
                </button>
              </div>

              {/* Reply Form */}
              {showReplyForm[post.id] && (
                <div className="reply-form mt-4 p-3 bg-muted/50 dark:bg-muted/50 rounded-lg">
                  <div className="border border-border dark:border-border rounded-lg mb-3">
                    <ReactQuill
                      theme="snow"
                      value={replyContent[post.id] || ""}
                      onChange={(value) =>
                        setReplyContent((prev) => ({
                          ...prev,
                          [post.id]: value,
                        }))
                      }
                      modules={modules}
                      formats={formats}
                      placeholder="Write a reply..."
                      className="bg-background dark:bg-background"
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-3">
                    <SecoundaryButton
                      onClick={() => {
                        setShowReplyForm((prev) => ({
                          ...prev,
                          [post.id]: false,
                        }));
                        setReplyContent((prev) => ({ ...prev, [post.id]: "" }));
                      }}
                    >
                      Cancel
                    </SecoundaryButton>
                    <PrimaryButton
                      onClick={() => addPostOrReply(post.id)}
                      disabled={!replyContent[post.id]?.trim()}
                    >
                      Reply
                    </PrimaryButton>
                  </div>
                </div>
              )}

              {/* Replies */}
              {post.replies && post.replies.length > 0 && (
                <div className="replies mt-4 space-y-3">
                  {post.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="reply bg-muted/30 dark:bg-muted/30 rounded-lg p-3 ml-6"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="avatar w-8 h-8 rounded-full bg-muted dark:bg-muted flex items-center justify-center overflow-hidden">
                          {reply.user?.image ? (
                            <img
                              src={reply.user.image}
                              alt={`${reply.user.first_name ?? ""} ${reply.user.last_name ?? ""}`}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="12"
                                fill={`hsl(${Math.random() * 360}, 70%, 80%)`}
                              />
                              <text
                                x="50%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                fill="#000000"
                                fontSize="10"
                                fontWeight="bold"
                              >
                                {`${reply?.user?.first_name?.[0] || ""}${
                                  reply?.user?.last_name?.[0] || ""
                                }`}
                              </text>
                            </svg>
                          )}
                        </div>
                        <div>
                          <h5 className="font-medium text-sm text-foreground dark:text-foreground !mb-1">
                            {`${reply.user.first_name ?? ""} ${reply.user.last_name ?? ""}`}
                          </h5>
                          <p className="text-xs text-muted-foreground dark:text-muted-foreground m-0">
                            {reply.created_at}
                          </p>
                        </div>
                      </div>
                      <div
                        className="reply-content text-sm text-foreground dark:text-foreground prose prose-sm max-w-none dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: reply.text }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground dark:text-muted-foreground">
            <p>No posts yet. Be the first to start a discussion!</p>
          </div>
        )}

        {/* Pagination */}
        {posts && posts.length > 0 && totalPosts > pageSize && (
          <div className="mt-6">
            <CustomPagination
              onPageChange={handlePageChange}
              page={currentPage}
              pageSize={pageSize}
              total={totalPosts}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityDiscussion;
