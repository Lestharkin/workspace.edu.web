export default interface MenuItem {
  label: string
  link: string
  active: boolean
  action: () => void
}
