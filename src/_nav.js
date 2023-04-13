import React, { useContext } from "react";
import { NavGroup, NavItem } from "navgroups";
import { RoleMenuAccessContext } from "./context/roleMenuAccess";
import { MdDashboard } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { FiGitMerge } from "react-icons/fi";
import { ImOffice } from "react-icons/im";
import { RiListSettingsFill } from "react-icons/ri";
import { AiOutlineNodeExpand } from "react-icons/ai";
import _ from "lodash";
const _nav = () => {
  let roleMenuAccess = useContext(RoleMenuAccessContext);

  let commonRoute = [
    {
      component: NavItem,
      name: "Dashboard",
      to: "/dashboard",
      order: 0,
      icon: <MdDashboard style={{ width: "30px", paddingLeft: "2px " }} />,
      // icon:  <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      badge: {
        color: "info",
      },
    },
  ];

  let defaultSideMenu = [];
  const _navforsidebar = [
    {
      component: NavGroup,
      type: "group",
      name: "Organization",
      to: "/organization",
      order: 1,
      // icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
      icon: <ImOffice style={{ width: "30px", paddingLeft: "2px " }} />,
      items: [
        {
          component: NavItem,
          name: "Role",
          to: "/organization/role",
        },
        {
          component: NavItem,
          name: "Menu",
          to: "/organization/menu",
        },
        {
          component: NavItem,
          name: "Department",
          to: "/organization/department",
        },
        {
          component: NavItem,
          name: "Designation",
          to: "/organization/designation",
        },
      ],
    },
    {
      component: NavGroup,
      name: "Mapping",
      type: "group",
      to: "/mapping",
      order: 2,
      // icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
      icon: <FiGitMerge style={{ width: "30px", paddingLeft: "2px " }} />,
      items: [
        {
          component: NavItem,
          name: "Role Menu",
          to: "/mapping/rolemenumapping",
        },
      ],
    },
    {
      component: NavItem,
      name: "Employee",
      type: "single",
      to: "/createemployee",
      order: 3,
      icon: <IoPersonAddSharp style={{ width: "30px", paddingLeft: "2px " }} />,
      // icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      badge: {
        color: "info",
      },
    },
    {
      component: NavGroup,
      name: "Assets",
      type: "group",
      order: 4,
      icon: (
        <RiListSettingsFill style={{ width: "30px", paddingLeft: "2px " }} />
      ),
      items: [
        {
          component: NavItem,
          name: "Store",
          to: "/assets/createassets",
        },
        {
          component: NavItem,
          name: "Asset Mapping",
          to: "/assets/assetmapping",
        },
      ],
    },
    {
      component: NavGroup,
      name: "Request",
      type: "group",
      order: 5,
      icon: (
        <AiOutlineNodeExpand style={{ width: "30px", paddingLeft: "2px " }} />
      ),
      items: [
        {
          component: NavItem,
          name: "View Request",
          to: "/request/allrequest",
        },
      ],
    },
  ];

  let ownerarr = [];
  let doublearr = [],
    navItem = [],
    mass = [];

  if (roleMenuAccess.isOwner == true) {
    ownerarr = [...defaultSideMenu, ..._navforsidebar];
  } else {
    roleMenuAccess.roleMenuAccess.map((item) => {
      _navforsidebar.map((route) => {
        if (route.type == "single") {
          if (route.name?.toLowerCase() == item.menu?.toLowerCase()) {
            defaultSideMenu.push(route);
            doublearr.push(route);
          }
        }
        if (route.type == "group") {
          route?.items?.map((i) => {
            if (i.name?.toLowerCase() == item.menu?.toLowerCase()) {
              defaultSideMenu.push(route);
            }
          });
        }
      });
    });

    defaultSideMenu.map(async (item) => {
      if (item.type == "group") {
        let data = [];

        for (let index = 0; index < item.items.length; index++) {
          const i = item.items[index];
          let find = roleMenuAccess.roleMenuAccess.findIndex((route) => {
            if (i.name?.toLowerCase() == route.menu?.toLowerCase()) {

              return true;
            }
          });
          if (find >= 0) {
            data.push(i);
          }
        }

        if (data.length > 0) {
          mass.push({ ...item, items: data });
        }
      }
      if (item.type == "single") {
        let find = roleMenuAccess.roleMenuAccess.findIndex((route) => {
          if (route.name?.toLowerCase() == item.menu?.toLowerCase()) {
            return true;
          }
        });

        if (find >= 0) {
          mass.push(item);
        }
      }
    });
    navItem = commonRoute.concat(mass);
  }
  let ownRou = commonRoute.concat(ownerarr);

  let findUniq=_.uniqBy(navItem, (e) => {
    return e.name;
  })

  return roleMenuAccess.isOwner == true
    ? _.sortBy(ownRou, (obj) => obj.order)
    : _.sortBy(findUniq, (obj) => obj.order);
};

export default _nav;