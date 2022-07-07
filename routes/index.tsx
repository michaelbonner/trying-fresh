/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md grid gap-y-8`}>
      <div class={tw`flex gap-4 items-center`}>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class={tw`text-3xl font-bold`}>Fresh test</h1>
      </div>
      <div class={tw`prose`}>
        <p>
          This is a test of the Fresh framework. Fresh is a next generation web
          framework, built for speed, reliability, and simplicity. Some stand
          out features:
          <ul class={tw`list-disc list-inside`}>
            <li>Just-in-time rendering on the edge.</li>
            <li>Island based client hydration for maximum interactivity.</li>
            <li>
              Zero runtime overhead: no JS is shipped to the client by default.
            </li>
            <li>No build step.</li>
            <li>No configuration necessary.</li>
            <li>TypeScript support out of the box.</li>
          </ul>
          <p>
            Fresh embraces the tried and true design of server side rendering
            and progressive enhancement on the client side.
          </p>
        </p>
      </div>
      <Counter start={3} />
    </div>
  );
}
