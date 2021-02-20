import React from 'react';
import pt from 'prop-types';

import { Container, StyledLink } from './style';

import { parseQuery, stringifyQuery } from '../../utils/url';

class Pagination extends React.Component {
  static defaultProps = {
    pages: [],
    currentPage: 1,
  }

  getQuery = (search, pageNumber) => {
    const { category } = parseQuery(search, { parseString: true });
    let qs = `?${stringifyQuery({
      category,
      page: pageNumber,
    })}`

    return qs;
  }

  render() {
    const { currentPage, pages } = this.props;

    if (!pages.length) return null;

    return (
      <Container>
        <StyledLink
          to={({ search }) => this.getQuery(search, currentPage - 1)}
          isDisable={currentPage - 1 <= 0}
          isPrev
        >
          Назад
        </StyledLink>

        {pages.map((page, index) => {
          if (index + 1 > 6) {
            return null;
          }

          if (index === 5) {
            return (
              <>
                <StyledLink
                  key={page[0].id}
                  to={({ search }) => this.getQuery(search, index + 1)}
                  isActive={index + 1 === currentPage}
                >
                  ...
                </StyledLink>
                <StyledLink
                  key={page[1].id}
                  to={({ search }) => this.getQuery(search, pages.length)}
                  isActive={pages.length === currentPage}
                >
                  {pages.length}
                </StyledLink>
              </>
            );
          }

          return (
            <StyledLink
              key={page[0].id}
              to={({ search }) => this.getQuery(search, index + 1)}
              isActive={index + 1 === currentPage}
            >
              {index + 1}
            </StyledLink>
          )
        })}

        <StyledLink
          isDisable={currentPage >= pages.length}
          to={({ search }) => this.getQuery(search, currentPage + 1)}
          isNext
        >
          Вперёд
        </StyledLink>
      </Container>
    )
  }
}

export default Pagination;

Pagination.propTypes = {
  pages: pt.array.isRequired,
  currentPage: pt.number.isRequired,
};
