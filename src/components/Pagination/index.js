import React from 'react';
import pt from 'prop-types';

import { Container, Button } from './style';

class Pagination extends React.Component {
  static defaultProps = {
    pages: [],
    currentPage: 0,
    pushHistory: () => {},
    setPage: () => {},
  }

  handleClick = (event) => {
    event.preventDefault();
    const pageNumber = +event.target.getAttribute('href').substr(1);
    const { setPage, currentPage, pushHistory } = this.props;

    if (currentPage === pageNumber) return;

    pushHistory('page', {
      page: pageNumber
    });
    setPage(pageNumber);

  };

  render() {
    const { currentPage, pages } = this.props;

    if (!pages.length) return null;

    return (
      <Container>
        <Button
          as="a"
          isDisable={currentPage - 1 <= 0}
          href={`#${currentPage - 1}`}
          onClick={this.handleClick}
          secondary
          isPrev
        >
          Назад
        </Button>

        {pages.map((page, index) => {
          if (index + 1 > 6) {
            return null;
          }

          if (index === 5) {
            return (
              <>
                <Button
                  key={page[0].id}
                  as="a"
                  href={`#${index + 1}`}
                  onClick={this.handleClick}
                  isActive={index + 1 === currentPage}
                  secondary
                >
                  ...
                </Button>
                <Button
                  key={page[1].id}
                  as="a"
                  href={`#${pages.length}`}
                  onClick={this.handleClick}
                  isActive={pages.length === currentPage}
                  secondary
                >
                  {pages.length}
                </Button>
              </>
            );
          }

          return (
            <Button
              key={page[0].id}
              as="a"
              href={`#${index + 1}`}
              onClick={this.handleClick}
              isActive={index + 1 === currentPage}
              secondary
            >
              {index + 1}
            </Button>
          )
        })}

        <Button
          as="a"
          isDisable={currentPage >= pages.length}
          href={`#${currentPage + 1}`}
          onClick={this.handleClick}
          secondary
          isNext
        >
          Вперёд
        </Button>
      </Container>
    )
  }
}

export default Pagination;

Pagination.propTypes = {
  pages: pt.array.isRequired,
  setPage: pt.func.isRequired,
  currentPage: pt.number.isRequired,
  pushHistory: pt.func.isRequired
};
