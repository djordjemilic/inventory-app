import React from "react";
import { CustomNextPage } from "../types/CustomNextPage";

const categories: CustomNextPage = () => {
  return <div>I AM PROTECTED</div>;
};

export default categories;
categories.requireAuth = true;
