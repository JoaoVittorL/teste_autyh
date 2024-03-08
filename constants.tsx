import { Icon } from "@iconify/react";
import { SideNavItem } from "@/types/rote";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Inicio",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Produção",
    path: "/production",
    icon: <Icon icon="lucide:folder-kanban" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Programação", path: "/production" },
      { title: "Obra", path: "/production/construction" },
      { title: "Serviços", path: "/production/services" },
    ],
  },
  {
    title: "Cadastrar",
    path: "/register",
    icon: <Icon icon="lucide:file-pen-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Usuário", path: "/admin/register/users" },
      { title: "Equipes", path: "/admin/register/teams" },
      { title: "Veículo", path: "/admin/register/vehicles" },
      { title: "Serviço", path: "/admin/register/services" },
      { title: "Perguntas", path: "admin/register/questions" },
      { title: "Obras", path: "/admin/register/constructions" },
    ],
  },
  {
    title: "Conta",
    path: "/settings",
    icon: <Icon icon="lucide:circle-user" width="24" height="24" />,
    submenu: true,
    subMenuItems: [{ title: "Conta", path: "/admin/settings" }],
  },
];
