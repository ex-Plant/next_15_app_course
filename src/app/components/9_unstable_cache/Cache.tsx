import { PrismaClient } from "../../../generated/prisma";
import { unstable_cache } from "next/cache";

const Cache = async () => {
  const prisma = new PrismaClient();

  //not cached
  const data = await prisma.users.findMany();

  // ***********************

  const getCachedUsers = unstable_cache(async () => {
    try {
      const data = await prisma.users.findMany();
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  });

  const cachedData = await getCachedUsers();

  return (
    <>
      cache page
      {cachedData?.map((d, i) => {
        return (
          <div key={i} className={`outline `}>
            {d.name}
          </div>
        );
      })}
    </>
  );
};

export default Cache;
