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