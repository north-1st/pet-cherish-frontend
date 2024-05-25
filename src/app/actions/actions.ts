'use server';

// export const createUser = async (prevState: any, formData: FormData) => {
//   'use server';

//   const input = {
//     real_name: formData.get('real_name') as string,
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   };

//   try {
//     const response = await fetch('https://pet-cherish-backend.onrender.com/api/v1/users/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(input),
//     });

//     if (!response.ok) {
//       const data = await response.json();
//       return NextResponse.json({ message: data.message }, { status: response.status });
//     }

//     const data = await response.json();

//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//   }
// };

export const signup = async (formData: FormData) => {
  const input = {
    real_name: formData.get('real_name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  try {
    const response = await fetch('https://pet-cherish-backend.onrender.com/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    console.log(response);

    // return { status: 'success' };

    // 以下是修改後的語法
    const data = await response.json();

    // 因為 throw new Error 只能接字串，所以我改用 throw 丟整包資料
    if (!response.ok) {
      throw data;
    }

    return { data };
  } catch (error) {
    // return { status: 'error' };

    return {
      message: 'Please enter a valid email',
    };

    // console.error('API 請求錯誤:', error);

    // 因為 new Error 只能接受 string 格式的資料，所以我先用 JSON.stringify 轉型
    // 這個 throw 是丟到前端
    // throw new Error(
    //   JSON.stringify({
    //     data: error,
    //   })
    // );
    // return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};
