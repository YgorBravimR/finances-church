import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 0;
  a {
    color: ${(props) => props.theme['gray-300']};
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
    box-shadow: 0px 0px 20px ${(props) => props.theme['purple-500']};
    background-color: ${(props) => props.theme['purple-700']};
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
`
