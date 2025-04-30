import { prisma } from "@/lib/prisma";
import RightSideBarPlaylistClient from "./RightSideBarPlaylistClient";

export default async function RightSideBarPlaylist({ path }: { path: string }) {
  const songs = await prisma.songs.findMany();  

  return <RightSideBarPlaylistClient songs={songs} path={path} />;
}
