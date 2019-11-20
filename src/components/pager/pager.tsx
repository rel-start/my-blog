import React, {
  memo,
  useState,
  useMemo,
  useCallback,
  MouseEvent,
} from 'react';
import classnames from 'classnames';

import Button from '../button/button';

import styles from './pager.module.css';
import ButtonToolbar from '../button-toolbar/button-toolbar';
import ButtonGroup from '../button-group/button-group';
import Theme from '@assets/scripts/theme';

export default memo(function Pager(props: IPagerProps) {
  const {
    total = 100,
    currentPage = 1,
    visiblePagesLimit = 3,
    pageSize = 16,
    translations = {
      perPage: 'per page',
      firstPage: 'First page',
      lastPage: 'Last page',
      nextPage: 'Next page',
      previousPage: 'Previous',
    },
    onPageChange = () => { },
    className,
    disableFirstAndLastPage = true,
  } = props;

  const [curPage, setCurPage] = useState(currentPage);

  const getTotal = useMemo(() => (
    Math.ceil(total / pageSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [pageSize]);

  const handlePageChange = useCallback((i: number, event: MouseEvent) => {
    setCurPage(i);
    onPageChange(i, event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getButton = useCallback(({ page, content, key, active }: any) => {
    return (
      <Button
        key={key}
        active={active ? 1 : 0}
        onClick={(event: MouseEvent) => handlePageChange(page, event)}
        theme={Theme.DOT}
        isusedefaultstyle={0}
      >
        {content}
      </Button>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPagerContent = useCallback(() => {
    const totalPages = getTotal;

    if (totalPages < 2) {
      return null;
    }

    let start = 1;
    let end = getTotal;

    if (getTotal >= visiblePagesLimit + 1) {
      const leftHalfFrameSize = Math.ceil(visiblePagesLimit / 2) - 1;
      const rightHalfFrameSize = visiblePagesLimit - leftHalfFrameSize - 1;

      start = curPage - leftHalfFrameSize;
      end = curPage + rightHalfFrameSize;

      if (start < 1) {
        const tail = 1 - start;
        start += tail;
        end += tail;
      }

      if (end > totalPages) {
        const tail = end - totalPages;
        start -= tail;
        end -= tail;
      }
    }

    const buttons = [];
    for (let i = start; i <= end; i++) {
      buttons.push(getButton({ page: i, content: i, key: i, active: i === curPage }));
    }

    const lastPageButtonAvailabel = (!disableFirstAndLastPage && end < totalPages);

    return (
      <>
        <ButtonToolbar>
          {(!disableFirstAndLastPage && start > 1) && (
            <ButtonGroup>
              {getButton({
                page: 1,
                content: translations.firstPage,
              })}
            </ButtonGroup>
          )}

          <ButtonGroup>
            {start > 1 && getButton({ page: start - 1, content: '...' })}

            {buttons}

            {end < totalPages && getButton({ page: end + 1, content: '...' })}
          </ButtonGroup>

          {lastPageButtonAvailabel && (
            <ButtonGroup>
              {getButton({
                page: totalPages,
                content: translations.lastPage,
              })}
            </ButtonGroup>
          )}
        </ButtonToolbar>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTotal, curPage]);

  const classes = useMemo(() => (
    classnames(styles.pager, className)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), []);

  return (
    <div className={classes}>
      {
        getPagerContent()
      }
    </div>
  );
})

interface IPagerProps {
  [propsName: string]: any
}
