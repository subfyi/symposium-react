import React from 'react'

export default class extends React.Component {
    render() {
        if (this.props.pageCount === 1) {
            return null;
        }

        const firstPage = this.props.activePage !== 1 && this.props.firstPage && this.props.firstPage(1);
        const prevPage = this.props.activePage !== 1 && this.props.prevPage && this.props.prevPage(this.props.activePage - 1);

        const showPages = this.props.showPages || this.props.pageCount;
        const middlePage = showPages / 2;

        const startPage = Math.max(0, Math.floor(this.props.activePage - (showPages / 2)), 0);

        const pages = [...Array(Math.min(showPages, this.props.pageCount))]
            .map((_, index) => startPage + 1 + index)
            .filter(a => a <= this.props.pageCount);

        const pageElements = pages.map(page => this.props.page(page));

        const nextPage = this.props.activePage !== this.props.pageCount && this.props.nextPage && this.props.nextPage(this.props.activePage + 1);
        const lastPage = this.props.activePage !== this.props.pageCount && this.props.lastPage && this.props.lastPage(this.props.pageCount);

        return <>
            {firstPage}
            {prevPage}

            {pages[0] !== 1 && this.props.dots(1)}

            {pageElements}

            {pages[pages.length - 1] !== this.props.pageCount && this.props.dots(this.props.pageCount)}

            {nextPage}
            {lastPage}
        </>;
    }
}
