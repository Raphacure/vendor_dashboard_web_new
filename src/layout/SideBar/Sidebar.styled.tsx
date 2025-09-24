import styled from "styled-components";

export const SidebarStyled = styled.div`
  max-height: calc(100vh - 89px);
  height: 100%;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .sidebar-main {
    width: 100px;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: width 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    border-right: 1px solid #e0e0e0;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    position: relative;
    will-change: width;
    height: 100%;
    /* Hide scrollbar for Firefox */
    scrollbar-width: none;
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }

    &:hover {
      width: 250px;

      .submenu-container.active {
        transition-delay: 0.1s;
        max-height: 500px;
        opacity: 1;
      }

      .menu-item span,
      .logout span {
        display: inline;
        opacity: 1;
        transform: translateX(0);
        transition-delay: 0.05s;
      }

      .chevron-icon {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .active-indicator {
    position: absolute;
    left: 2px;
    right: 2px;
    background: #252b61;
    border-radius: 8px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    box-shadow: 0 4px 12px rgba(37, 43, 97, 0.3);
    transform-origin: top left;
    will-change: transform, height;
  }

  .main-menu-div {
    &:hover {
      .submenu-container {
        transition-delay: 0.3s;
        max-height: 500px;
        opacity: 1;
      }
    }
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 15px 15px 30px;
    cursor: pointer;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
    will-change: transform, background-color;

    &:hover:not(.active) {
      transform: translateX(2px);
    }

    &.has-sub-menu:hover .chevron-icon {
      transform: rotate(90deg);
    }
  }

  .submenu-container {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .submenu-item {
    display: grid;
    align-items: center;
    grid-template-columns: 24px 1fr;
    gap: 15px;
    padding: 8px 15px 8px 30px;
    cursor: pointer;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &.active{
      font-weight: 600;
    }
  }

  .menu-item.active {
    color: white;
    font-weight: 600;
  }

  .menu-item span,
  .logout span {
    display: none;
    transform: translateX(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }

  .chevron-icon {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: auto;
  }

  .menu-item img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .menu-item:hover img {
    transform: scale(1.1);
  }

  .bottom-section {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 10px;
    margin-top: auto;
  }

  .logout {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 15px 15px 30px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    position: relative;

    &:hover {
      background: linear-gradient(
        135deg,
        rgba(220, 38, 38, 0.1),
        rgba(239, 68, 68, 0.1)
      );
    }

    .logo {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .help-center-container {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    position: relative;
    background: linear-gradient(135deg, #1f2d59, #252b61);
    width: 100%;
    height: 120px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .help-center-icon {
    background: linear-gradient(135deg, #1f2d59, #252b61);
    border: 4px solid white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    position: absolute;
    top: -37px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(31, 45, 89, 0.2);

    .logo {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover .logo {
      transform: scale(1.1);
    }
  }

  .help-center-text {
    color: white;
    font-size: 14px;
    font-weight: bold;
    margin-top: 55px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: none;
    transform: translateY(10px);
  }

  .sidebar-main:hover .help-center-text {
    display: block;
    transform: translateY(0);
    transition-delay: 0.1s;
  }

  .logo {
    width: 26px;
    height: 26px;
    object-fit: contain;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Smooth loading animation */
  .menu-item {
    animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: calc(var(--item-index, 0) * 0.1s);
    opacity: 0;
    transform: translateX(-20px);
  }

  @keyframes slideInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .sidebar-main {
      width: 80px;

      &:hover {
        width: 200px;
      }
    }

    .menu-item {
      padding: 12px 12px 12px 25px;
    }

    .help-center-container {
      height: 100px;
    }

    .help-center-icon {
      width: 60px;
      height: 60px;
      top: -25px;
    }
  }
` as any;
