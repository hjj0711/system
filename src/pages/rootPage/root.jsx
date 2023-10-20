import {
  Outlet,
  useLoaderData,
  Form,
  redirect,useNavigation,
  NavLink,
} from "react-router-dom";
// import { getContacts, createContact } from "../../contacts";
// export async function action() {
//   const contact = await createContact();
//   return redirect(`/contacts/${contact.id}/edit`);
// }
// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }
export default function Root() {
  // const { contacts } = useLoaderData();
  const navigation = useNavigation(); // useNavigation返回当前导航状态：它可以是以下之一"idle" | "submitting" | "loading"。
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
       
      </div>
      <div id="detail"  className={
          navigation.state === "loading" ? "loading" : ""
        } >
        <Outlet />
      </div>
    </>
  );
}
