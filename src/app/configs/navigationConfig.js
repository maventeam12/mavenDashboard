import i18next from "i18next";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("ar", "navigation", ar);

const navigationConfig = [
  {
    id: "client.contracts",
    title: "contracts",
    type: "group",
    icon: "heroicons-outline:home",
    translate: "CONTRACTS",
    icon: "material-solid:assignment",
    auth: ["client"],
    children: [
      {
        id: "client.contracts  ",
        auth: ["client"],
        title: "all contracts",
        translate: "CONTRACTS",
        type: "item",
        icon: "material-solid:assignment",
        url: "/clientContract/contracts",
      },
      {
        id: "contracts.advertisement  ",
        auth: ["client"],
        title: "all users",
        translate: "advertisement",
        type: "item",
        icon: "material-solid:notifications_active",
        url: "/clientContract/advertisements",
      },

    ],
  },
  {
    id: "contracts",
    title: "contracts",
    type: "group",
    icon: "heroicons-outline:home",
    translate: "CONTRACTS",
    icon: "material-solid:assignment",
    auth: ["admin",'employee'],
    children: [
      {
        id: "contracts.contracts  ",
        auth: ["admin",'employee'],
        title: "all contracts",
        translate: "CONTRACTS",
        type: "item",
        icon: "material-solid:assignment",
        url: "/contract/contracts",
      },
      {
        id: "contracts.advertisement  ",
        auth: ["admin",'employee'],
        title: "all users",
        translate: "advertisement",
        type: "item",
        icon: "material-solid:notifications_active",
        url: "/contract/advertisements",
      },
      {
        id: "contracts.contractExtraService  ",
        auth: ["admin",'employee'],
        title: "all users",
        translate: "contractExtraService",
        type: "item",
        icon: "heroicons-outline:clipboard-check",
        url: "/contract/contractExtraService",
      },
      
    ],
  },
  {
    id: "website configuration",
    title: "website configuration",
    type: "group",
    icon: "heroicons-outline:home",
    translate: "websiteConfig",
    auth: ["admin", "employee"],
    children: [
      {
        id: "website.blogs",
        auth: ["admin", "employee"],
        title: "all blogs",
        translate: "BLOGS",
        type: "item",
        icon: "heroicons-outline:newspaper",
        url: "/websiteConfiguration/blogs",
      },
      {
        id: "website.service  ",
        auth: ["admin", "employee"],
        title: "all services",
        translate: "SERVICE",
        type: "item",
        icon: "material-outline:miscellaneous_services",
        url: "/websiteConfiguration/services",
      },
      {
        id: "website.events",
        auth: ["admin", "employee"],
        title: "all events",
        translate: "EVENTS",
        type: "item",
        icon: "material-outline:camera",
        url: "/websiteConfiguration/events",
      },
      {
        id: "website.eventPhotographies",
        auth: ["admin", "employee"],
        title: "all events photographies",
        translate: "EVENTSPHOTOGRAPHYIES",
        type: "item",
        icon: "heroicons-outline:photograph",
        url: "/websiteConfiguration/eventPhotography",
      },
      {
        id: "website.appointment  ",
        auth: ["admin", "employee"],
        title: "all appointments",
        translate: "APPOINTMENT",
        type: "item",
        icon: "material-outline:edit_note",
        url: "/websiteConfiguration/appointments",
      },
      {
        id: "website.career  ",
        auth: ["admin"],
        title: "all careers",
        translate: "CAREER",
        type: "item",
        icon: "material-twotone:work",
        url: "/websiteConfiguration/careers",
      },
      {
        id: "website.careerSolicitud  ",
        auth: ["admin"],
        title: "all careers solicitudes",
        translate: "CAREERSOLICITUD",
        type: "item",
        icon: "heroicons-outline:inbox-in",
        url: "/websiteConfiguration/careersSolicitudes",
      },
    ],
  },

  {
    id: "Users",
    title: "Users",
    type: "group",
    icon: "heroicons-outline:home",
    translate: "users",
    icon: "heroicons-outline:user-group",
    auth: ["admin",'employee'],
    children: [
      {
        id: "users.team  ",
        auth: ["admin"],
        title: "all users",
        translate: "TEAM",
        type: "item",
        icon: "heroicons-outline:user-group",
        url: "/users/team",
      },
      {
        id: "users.loginHours  ",
        auth: ["admin"],
        title: "all loginHours",
        translate: "LOGINHOUR",
        type: "item",
        icon: "material-solid:access_time",
        url: "/users/loginHours",
      },
      {
        id: "users.clients  ",
        auth: ["admin",'employee'],
        title: "all clients",
        translate: "CLIENTS",
        type: "item",
        icon: "material-solid:account_circle",
        url: "/users/clients",
      },
    ],
  },


];

export default navigationConfig;
