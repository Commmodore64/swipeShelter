// Types
import type { NextPage } from "next";

// Utils
import Head from "next/head";
import { useState } from "react";
import { z } from "zod";

// Components
import SigninComponent from "~/components/auth/signin";
import { Button } from "~/components/ui/button";
import { prisma } from "~/server/db";

const Signin: NextPage = () => {
  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  //Validate Schema
  const validationSchema = z.object({
    name: z.string().nonempty(),
    lastName: z.string().nonempty(),
    phone: z.string().nonempty(),
    email: z.string().email(),
    password: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), "Debe contener una mayúscula")
      .regex(new RegExp(".*[a-z].*"), "Debe contener una minúscula")
      .regex(new RegExp(".*\\d.*"), "Debe contener un numero")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "Debe contener un carácter especial",
      )
      .min(8, "Must be at least 8 characters in length"),
  });

  const handleSignIn = () => {
    console.log(personalData);
    //async () => {
    try {
      const validatedData = validationSchema.parse(personalData);
      console.log("Datos validados:", validatedData);
      // Crear usuario con Prisma
      const createdUser = prisma.user.create({
        data: {
          name: personalData.name,
          lastName: personalData.lastName,
          phone: personalData.phone,
          email: personalData.email,
          password: personalData.password,
        },
      });
      console.log("Usuario creado con éxito:", createdUser);
    } catch (error) {
      //toast.error("Datos incorrectos");
      console.log(error);
    }
    //};
  };
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <SigninComponent setData={setPersonalData} data={personalData} />
      <Button
        type="submit"
        variant="outline"
        className="w-full font-bold"
        onClick={handleSignIn}
      >
        L o g i n
      </Button>
    </>
  );
};
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = await getServerAuthSession(ctx);
//   if (session && typeof session === "object" && !Array.isArray(session)) {
//     return {
//       redirect: {
//         destination: "/dashboard",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { session: session ? ({ ...session } as Session) : null },
//   };

export default Signin;
