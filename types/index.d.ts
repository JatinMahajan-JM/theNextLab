export type SidebarNavItem = {
    title: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
} & (
        | {
            href: string
            items?: never
        }
        | {
            href?: string
            items: NavLink[]
        }
    )

export type DocsConfig = {
    // mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}