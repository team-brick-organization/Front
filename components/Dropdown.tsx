import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon } from '@radix-ui/react-icons'

interface DropdownProps {
  dropDownNames: string[]
  activeDropdown: number
  setActiveDropdown: (index: number) => void
}

function Dropdown({
  dropDownNames,
  activeDropdown,
  setActiveDropdown,
}: DropdownProps) {
  return (
    <div className="m-20pxr">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="py-2 flex items-center rounded border px-10pxr">
          {dropDownNames[activeDropdown]}
          <ChevronDownIcon className="ml-10pxr" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="mt-2 rounded border bg-white px-10pxr py-10pxr shadow-lg">
          {dropDownNames.map((name) => (
            <DropdownMenu.Item
              key={name}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onSelect={() => setActiveDropdown(dropDownNames.indexOf(name))}
            >
              {name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default Dropdown
