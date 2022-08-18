import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
<<<<<<< Updated upstream
=======
  margin: 1.25rem 0;
  align-items: center;
  .homeAnchor {
    color: ${(props) => props.theme['adnv-green-2']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    margin-right: 1rem;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['gray-500']};
    }
  }
`

export const RegisterPages = styled.div`
  display: flex;
  gap: 0.75rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  .incomeAnchor:hover,
  .expenseAnchor:hover,
  .memberAnchor:hover {
    border-bottom: 3px solid ${(props) => props.theme['gray-500']};
  }

  .incomeAnchor.active,
  .expenseAnchor.active,
  .memberAnchor.active {
    box-shadow: 0px 0px 20px ${(props) => props.theme['gray-500']};
    border-radius: 16px;
  }

  .incomeAnchor {
    color: ${(props) => props.theme['green-500']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }

  .expenseAnchor {
    color: ${(props) => props.theme['red-500']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }

  .memberAnchor {
    color: ${(props) => props.theme['gray-500']};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
>>>>>>> Stashed changes
`
