import { prisma } from "@/lib/prisma";
import LeftSideBarPlaylistClient from "./RightSideBarPlaylistClient";

export default async function LeftSideBarPlaylist() {
  const songs = await prisma.songs.findMany();  

  return <LeftSideBarPlaylistClient songs={songs} />;
}
