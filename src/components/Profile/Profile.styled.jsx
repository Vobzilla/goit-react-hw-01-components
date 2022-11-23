import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.normal};
`;
