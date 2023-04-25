//  ******************** Base URL ***********************
let baseUrl = "http://localhost:7349/api/";



//  ******************** Auth Api's ***********************
export const createUser = async (body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}user/reg`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getAllUsers = async (menuId) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${baseUrl}user/getalluser?menuId=${menuId}`, requestOptions);
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const userLogin = async (body) => {
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${baseUrl}user/login`, requestOptions);
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getProfile = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  if (token) {
    const response = await fetch(`${baseUrl}user/profile`, requestOptions);
    if (!response.ok) {
      let data = await response.json();
      return { data: data, ok: false };
    }
    let data = await response?.json();
    return { data: data, ok: true };
  }
};

export const getUserById = async (id) => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    const response = await fetch(
      `${baseUrl}user/getuserbyid/${id}`,
      requestOptions
    );
    if (!response.ok) {
      let data = await response.json();
      return { data: data, ok: false };
    }
    let data = await response?.json();
    return { data: data, ok: true };
  }
};

// export const getAccessForMenu = async (roleId, menuId) => {
//   let token = localStorage.getItem("sems-token");
//   if (token) {
//     token = JSON.parse(token);
//   }
//   const requestOptions = {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       "sems-auth-token": token,
//     },
//   };
//   const response = await fetch(   `${baseUrl}rolemenuaccess/getaccessforuser?roleId=${roleId}&menuId=${menuId}`,
//     requestOptions
//   );
//   if (!response.ok) {
//     let data = await response.json();
//     return { data: data, ok: false };
//   }
//   let data = await response?.json();
//   return { data: data, ok: true };
// };

// export const myProfile = async () => {
//   let token = localStorage.getItem("sems-token");
//   if (token) {
//     token = JSON.parse(token);
//   }
//   const requestOptions = {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       "sems-auth-token": token,
//     },
//   };
//   if (token) {
//     const response = await fetch(`${baseUrl}user/myprofile`, requestOptions);
//     if (!response.ok) {
//       let data = await response.json();
//       return { data: data, ok: false };
//     }
//     let data = await response?.json();
//     return { data: data, ok: true };
//   }
// };

export const updateUser = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}user/updateuser/${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data.data, ok: true };
};

export const deleteUserById = async (id) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}user/deleteuser/${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data.data, ok: true };
};


//  ******************** Menu Api's ***********************
export const createMenu = async (body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/menu/createmenu`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getallMenu = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/menu/getallmenu`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const updateMenu = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
       "Content-Type": "application/json",
        "sems-auth-token": token 
      },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/menu/upmenu?id=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

//  ******************** Role Api's ***********************
export const createRole = async (body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/role/newrole`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getallRole = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/role/getallrole`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const updateRole = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/role/updaterole?id=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getRoleById = async (id) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  let res = await fetch(
    `${baseUrl}owner/role/getrolebyid/${id}`,
    requestOptions
  );
  if (!res.ok) {
    let data = await res.json();
    return { data: data, ok: false };
  }
  let data = await res?.json();
  return { data: data, ok: true };
};

export const createRoleMenu = async (body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}rolemenuaccess/createnew`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { message: data.message, ok: false };
  }
  const data = await response.json();
  return { message: data.message, ok: true };
};

export const getAccessForMenu = async (roleId, menuId) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(   `${baseUrl}rolemenuaccess/getaccessforuser?roleId=${roleId}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getRoleMenu = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  let response = await fetch(`${baseUrl}rolemenuaccess/getall`, requestOptions);
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getRoleMenuById = async (id,menuId) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  let response = await fetch(
    `${baseUrl}rolemenuaccess/getbyid/${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const getRoleMenuAccessById = async (id) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}rolemenuaccess/getidaccess/${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const updateRoleMenuById = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  let res = await fetch(
    `${baseUrl}rolemenuaccess/update/${id}`,
    requestOptions
  );
  let data = res?.json();
  return data;
};

export const createDepartment = async (body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/dept/createdept`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};


export const getallDep = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/dept/getalldept`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const updateDep = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  } 
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/dept/updatedept?deptid=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

//Course Controller

export const createCourse = async (id,body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/course/createcourse?departmentId=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}

export const getAllCourse = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/course/getallcourse`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}

export const updateCourse = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/course/updatecourse?courseid=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}

export const getCourseById = async (id) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/course/getcoursebyid?id=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}

export const createGender = async (body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/gender/creategender`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};


export const getallGender = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/gender/getallgender`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

export const updateGender = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  } 
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/gender/updategender?id=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
};

//Sports Controller

export const createSports = async (id,body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/sports/createsports?genderId=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}

export const getAllSports = async () => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/sports/getallsports`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}

export const updateSports = async (id, body) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(
    `${baseUrl}owner/sports/updatesports?id=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}

export const getSportsById = async (id) => {
  let token = localStorage.getItem("sems-token");
  if (token) {
    token = JSON.parse(token);
  }
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "sems-auth-token": token,
    },
  };
  const response = await fetch(
    `${baseUrl}owner/sports/getsportsbyid?id=${id}`,
    requestOptions
  );
  if (!response.ok) {
    let data = await response?.json();
    return { data: data, ok: false };
  }
  let data = await response?.json();
  return { data: data, ok: true };
}