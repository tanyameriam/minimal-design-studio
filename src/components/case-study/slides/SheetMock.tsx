import { Sheet } from 'lucide-react';

/**
 * A spreadsheet drawn in HTML, standing in for the requirements file.
 *
 * Currently unused. It stood in on BrynQ's `artefact-scenario` slide until
 * the real scenario file arrived as a blurred screenshot, which replaced it.
 * Kept because it is the only spreadsheet primitive in the kit and the other
 * studies may want one; if you use it again, ship it behind an
 * `Evidence kind="illustrative"` label so it cannot be read as a real
 * artefact.
 *
 * The empty rows at the bottom are the point as much as the filled ones: the
 * file was never finished in one pass, it was argued into shape over weeks.
 */

export type SheetCell = string | { badge: string; accent?: boolean };

const Cell = ({ value }: { value: SheetCell }) =>
  typeof value === 'string' ? (
    <>{value}</>
  ) : (
    <span
      className={`label inline-block rounded px-2 py-1 ${
        value.accent ? 'bg-accent text-accent-foreground' : 'panel-chip text-ink-600'
      }`}
    >
      {value.badge}
    </span>
  );

export const SheetMock = ({
  title,
  columns,
  rows,
  blankRows = 6,
}: {
  title: string;
  columns: string[];
  rows: SheetCell[][];
  /** Unfilled rows below the data. Reads as a file still being worked on. */
  blankRows?: number;
}) => (
  <div className="panel overflow-hidden">
    <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
      <Sheet aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-500" strokeWidth={1.5} />
      <p className="text-sm leading-none md:text-base">{title}</p>
    </div>

    {/* The file was always wider than the screen it was read on. */}
    <div className="overflow-x-auto">
      <table className="w-full min-w-[48rem] border-collapse text-left">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="border-b border-r border-border px-3 py-2.5 text-xs font-normal leading-snug text-ink-500 last:border-r-0"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.map((cell) => (typeof cell === 'string' ? cell : cell.badge)).join('|')}>
              {row.map((cell, i) => (
                <td
                  key={columns[i]}
                  className="border-b border-r border-border px-3 py-2.5 text-xs leading-snug text-ink-600 last:border-r-0"
                >
                  <Cell value={cell} />
                </td>
              ))}
            </tr>
          ))}

          {Array.from({ length: blankRows }, (_, i) => (
            <tr key={`blank-${i}`} aria-hidden="true">
              {columns.map((column) => (
                <td
                  key={column}
                  className="border-b border-r border-border px-3 py-3.5 last:border-r-0"
                >
                  <span className="block h-2 w-full rounded-sm bg-muted" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
