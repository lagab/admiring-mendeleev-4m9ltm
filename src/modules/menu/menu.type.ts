export default type MenuItem {
    icon?: ReactNode;
    title: string;
    path: string;
    targetBlank: boolean;
    items: MenuItem[];
};