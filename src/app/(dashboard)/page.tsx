"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/app/features/accounts/hooks/use-new-account";

const Home = () => {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>Open</Button>
    </div>
  );
};

export default Home;
