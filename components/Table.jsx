import { useState } from "react";

const UpDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.4"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    </svg>
  );
};

const Column = ({ children }) => {
  return (
    <td className="px-6 py-2 whitespace-nowrap">
      <div className="text-sm font-medium text-gray-900">{children}</div>
    </td>
  );
};

const HeaderColumn = ({ children, onSort }) => {
  return (
    <th
      onClick={() => onSort()}
      className="px-4 border border-t-0 border-b-0 border-l-0 border-r-gray-400 hover:bg-gray-200 text-center cursor-pointer py-2 bg-gray-100 text-sm font-bold text-gray-500  uppercase tracking-wider"
    >
      <div className="flex items-center justify-between ">
        <p className="mr-2">{children}</p>
        <UpDownIcon />
      </div>
    </th>
  );
};

const Row = ({ children, checked, onCheck }) => {
  return (
    <tr
      className={`hover:bg-gray-50  ${
        checked && " bg-light-gray"
      } cursor-pointer`}
      onClick={() => onCheck()}
    >
      <td className="px-4 py-2 whitespace-nowrap">
        <input
          onChange={() => onCheck()}
          checked={checked}
          type="checkbox"
          className="form-checkbox h-[17px] w-[17px] text-indigo-600 className:text-indigo-400 outline-none"
        />
      </td>
      {children}
    </tr>
  );
};

const Header = ({ children, checked, onCheck }) => {
  return (
    <thead>
      <tr>
        <th className="px-4 py-2 bg-gray-100 border border-t-0 border-b-0 border-l-0 border-r-gray-400 className:bg-gray-700 text-left text-sm font-bold text-gray-500 className:text-gray-300 uppercase tracking-wider">
          <input
            onChange={() => onCheck()}
            checked={checked}
            type="checkbox"
            className="h-[17px] w-[17px] text-indigo-600 className:text-indigo-400"
          />
        </th>
        {children}
      </tr>
    </thead>
  );
};

const Body = ({ children }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200 className:bg-gray-800 className:divide-gray-700">
      {children}
    </tbody>
  );
};

const VisibleColumnButton = ({ cols, columns, onChange }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className="px-6 py-[8px] rounded-md bg-blue-500 text-white font-bold"
      >
        Columns
      </button>
      {toggle && (
        <div className="top-10 px-7 className:bg-gray-600 bg-white absolute text-white font-bold p-4 rounded-md">
          <ul>
            {columns.map((column) => (
              <li
                key={column}
                onClick={() => onChange(column)}
                className="flex items-center justify-start mb-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={() => {}}
                  checked={cols.includes(column)}
                  className="mr-2"
                />
                <p>{column}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="text-gray-900 w-6 h-6 className:text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

const SearchInput = () => {
  return (
    <div className="flex items-center justify-between border-2 border-blue-600  rounded-md px-2">
      <input
        type="text"
        placeholder="Search ..."
        className="text-md className:text-white className:bg-secondary-className-bg py-1 outline-none w-full"
      />
      <SearchIcon />
    </div>
  );
};

export function Table({ columns = ["id", "name", "email"], data }) {
  const [checkedRows, setCheckedRows] = useState([]);
  const [cols, setCols] = useState(["id", "name", "email"]);
  const [sortedBy, setSortedBy] = useState([]);
  const [rows, setRows] = useState([
    { id: 1, name: "salah", email: "sad@gmail.com" },
    { id: 8, name: "kada", email: "sad@gmail.com" },
    { id: 3, name: "otman", email: "sad@gmail.com" },
    { id: 4, name: "ahmed", email: "sad@gmail.com" },
    { id: 5, name: "reda", email: "sad@gmail.com" },
    { id: 2, name: "rayan", email: "sad@gmail.com" },
    { id: 7, name: "alaa", email: "sad@gmail.com" },
    { id: 6, name: "mohamed", email: "sad@gmail.com" },
  ]);
  const handleOnSelectAll = () => {
    if (checkedRows.length > 0) {
      setCheckedRows([]);
    } else {
      setCheckedRows(rows.map((row) => row.id));
    }
  };
  const handleOnSelect = (id) => {
    if (checkedRows.includes(id))
      setCheckedRows(checkedRows.filter((item) => item !== id));
    else setCheckedRows([...checkedRows, id]);
  };
  function orderBy(prop = "name") {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      } else {
        return 0;
      }
    };
  }

  function reverseOrder(orderFn) {
    return function (a, b) {
      return orderFn(b, a);
    };
  }

  const handleOnSort = (col, rows) => {
    if (sortedBy[1] && sortedBy[0] == col) {
      setSortedBy([col, false]);
      setRows(rows.sort(orderBy(col)));
    } else {
      setSortedBy([col, true]);
      setRows(rows.sort(reverseOrder(orderBy(col))));
    }
  };

  const handleOnSelectColumn = (column) => {
    if (cols.includes(column)) {
      setCols(cols.filter((col) => col != column));
    } else {
      let s = [...cols, column];
      setCols(columns.filter((column) => s.includes(column)));
    }
  };

  const search = () => {
    return;
  };

  return (
    <div className="md:w-[630px] w-[520px]">
      <div className="flex relative items-center justify-between mb-4">
        <SearchInput onChange={(val) => search(val)} />
      </div>
      <div className="overflow-auto bg-white className:bg-gray-800 rounded-sm shadow-md">
        <table className="min-w-full divide-y divide-gray-200 className:divide-gray-700">
          <Header
            onCheck={() => handleOnSelectAll()}
            checked={rows.length == checkedRows.length}
          >
            {cols.map((col) => (
              <HeaderColumn
                key={col}
                sortedBy={col === sortedBy}
                onSort={() => handleOnSort(col, rows)}
              >
                {col}
              </HeaderColumn>
            ))}
          </Header>
          <Body>
            {rows.map((row) => (
              <Row
                key={row.id}
                onCheck={() => handleOnSelect(row.id)}
                checked={checkedRows.includes(row.id)}
              >
                {Object.keys(row).map((key) => {
                  if (cols.includes(key))
                    return <Column key={`${key}_${row.id}`}>{row[key]}</Column>;
                })}
              </Row>
            ))}
          </Body>
        </table>
      </div>
    </div>
  );
}