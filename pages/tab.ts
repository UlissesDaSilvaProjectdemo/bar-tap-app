import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../lib/supabase";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "Not authenticated" });

  const { title } = req.body;
  const { data, error } = await supabase
    .from("tabs")
    .insert([{ owner_id: session.user.id, title, status: "open" }])
    .select();

  if (error) return res.status(500).json({ error });

  res.status(200).json(data[0]);
}
