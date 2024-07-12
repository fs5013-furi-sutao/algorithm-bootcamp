import styled, { up, css } from '@xstyled/styled-components'

export const TableContainer = styled.div`
  overflow-y: auto;
  margin: 3 0 2;

  ${up(
    'lg',
    css`
      max-height: 900;
    `,
  )}
`

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-size: 100%;

  td,
  th {
    padding: 2 3;
    border:1px solid silver;
    border-collapse: collapse;
  }

  th {
    color: table-header-font-color;
    background-color:table-header-background-color;
    font-weight: 600;
    z-index: 20;
    position: sticky;
    top: 0;
  }

  td {
    font-size: 100%;
    border-top: 1;
    border-bottom: 1;
    border-color: layout-border;
    background-color:table-data-background-color;
    color: table-data-font-color;
  }
`
