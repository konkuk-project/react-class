import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    // mount 단계 작업
    // props -> state
    // REST API
    // D3, Video.js
    // setInterval, setTimeout
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      // clearInterval, cleqrTimeout
      // 라이브러리 인스턴스 제거
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  useEffect(() => {
    console.log("유저 값이 설정됨");
    console.log(user);
    // onToggle();
    return () => {
      console.log("유저 값이 바뀌기 전");
      console.log(user);
    };
  }, [user, onToggle]);

  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <b
        style={{ color: user.active ? "green" : "black", cursor: "pointer" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user, index) => (
        <User
          user={user}
          key={index + 1}
          onRemove={onRemove}
          onToggle={onToggle}
        ></User>
      ))}
    </div>
  );
}

export default UserList;
