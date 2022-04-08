import styled from 'styled-components';

export const Sidebar = styled.div`
  width: 65%;
  height: 100%;
  background: #333;
  position: fixed;
  padding: 2rem;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const Backdrop = styled.div`
  width: 35%;
  height: 100%;
  background: #00000033;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;
