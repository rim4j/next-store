import { auth } from "@clerk/nextjs/server";

import LinkDropDown from "./LinkDropDown";

const LinkDropDownServer = async () => {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;

  return <LinkDropDown isAdmin={isAdmin} />;
};

export default LinkDropDownServer;
