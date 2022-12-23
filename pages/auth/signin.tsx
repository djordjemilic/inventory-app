import { getProviders, signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { Center, Button, Title, Stack, Text, Group } from "@mantine/core";

export default function SignIn({ providers }: any) {
  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <Center key={provider.name}>
          <Stack spacing="xl">
            <Title align="center">Inventory app</Title>
            {provider.name === "Google" && (
              <Button
                onClick={() => signIn(provider.id)}
                size="lg"
                sx={{ alignSelf: "center" }}
              >
                <Group>
                  <Text size="md">Sign in with {provider.name}</Text>
                  <FaGoogle />
                </Group>
              </Button>
            )}
          </Stack>
        </Center>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
