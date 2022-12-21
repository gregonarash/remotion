import React, { useCallback, useRef, useState } from "react";
import "../input-fields.css";
import { BlueButton } from "../layout/Button";
import styles from "./parametrize.module.css";
import { ProgrammaticContent } from "./Programmatic";

export const Parametrize: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("JonnyBurger");
  const [rendering, setRendering] = useState(false);
  const [color, setColor] = useState("#ff0000");

  const render = useCallback(() => {
    setRendering(true);
    fetch("https://color-demo.remotion.dev/api/render", {
      headers: {
        "content-type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        username,
        color,
      }),
    })
      .then((res) => res.json())
      .then((r) => {
        console.log(r);
      });
  }, [color, username]);

  return (
    <div className={styles.parametrizerow}>
      <div style={{ flex: 1 }}>
        <h2 className={styles.parametrizetitle}>
          <span className={styles.parametrizegradient}>Programmatic</span>{" "}
          content <br />
          and rendering
        </h2>
        <p>
          Take user input or fetch data from an API.
          <br />
          Display interactive videos using{" "}
          <a href="/player">@remotion/player</a>
          <br />
          and render them at scale using <a href="/lambda">@remotion/lambda</a>.
        </p>
        <p style={{ fontSize: 13, maxWidth: 300 }}>
          Customize the video by entering a name and selecting your favorite
          color.
        </p>
        <div style={{ height: 10 }} />
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!ref.current?.value) {
                return;
              }

              setUsername(ref.current?.value as string);
            }}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <input
              ref={ref}
              className={styles.parametrizeinput}
              type="text"
              placeholder="Your name"
            />{" "}
            <input
              ref={ref}
              className={styles.parametrizeinput}
              type="text"
              onChange={(e) => {
                setColor(e.target.value);
              }}
              placeholder="Your favorite color"
            />{" "}
            <div style={{ width: 8, display: "inline-block" }} />
            <BlueButton
              loading={rendering}
              fullWidth={false}
              size="sm"
              onClick={render}
            >
              Render video
            </BlueButton>
          </form>
        </div>
      </div>
      <ProgrammaticContent username={username} color={color} />
    </div>
  );
};
