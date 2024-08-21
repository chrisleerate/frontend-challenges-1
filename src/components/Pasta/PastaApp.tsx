import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Ravioli } from "./Ravioli";
import { Linguine } from "./Linguine";

export const PastaApp: React.FC = () => {
  return (
    <div className="border-4 border-solid border-black m-8 p-4">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="ravioli" element={<Ravioli />} />
          <Route path="linguine" element={<Linguine />} />
          <Route
            path="macaroni"
            element={
              <div>
                TODO: We want a page that has the same header and footer as
                Ravioli and Linguine, but the content of the body should be
                "Macaroni is pasta shaped like curved narrow tubes"{" "}
              </div>
            }
          />
          <Route index element={<Navigate to="ravioli" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
