import React from "react";

function AuthPage(): JSX.Element {
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      Auth page
      <form onSubmit={() => handleSubmit}>
        <label htmlFor="email">
          <input
            id="email"
            value={1}
            onInput={(e) => {
              handleChangeEmail(e as any);
            }}
          />

          <input
            id="password"
            value={1}
            onInput={(e) => {
              handleChangePassword(e as any);
            }}
          />
        </label>
      </form>
    </div>
  );
}
