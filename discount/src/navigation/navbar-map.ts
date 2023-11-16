// navigation map - Contract - should be shared by the host and use it in MF childs
export interface Navlinks {
  href: string
  name: string
}

export const navlinks: Navlinks[] = [
  {
    href: '/drug-lookup',
    name: 'Drug Lookup'
  },
  {
    href: '/generate-discount',
    name: 'Generate Discount'
  }
]
