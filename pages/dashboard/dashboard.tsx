import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase"; // Ensure supabase client is properly imported
import { useSession } from "next-auth/react";

type Tab = {
  id: string;
  title: string;
  status: string;
};

export default function Dashboard() {
  const { data: session } = useSession();
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    if (session) {
      fetchTabs();
    }
  }, [session]);

  async function fetchTabs() {
    if (!session?.user?.id) return;

    const { data, error } = await supabase
      .from("tabs")
      .select("*")
      .eq("owner_id", session.user.id);

    if (error) {
      console.error("Error fetching tabs:", error);
    } else {
      setTabs(data || []);
    }
  }

  // ✅ Add the missing function
  async function createTab() {
    if (!session?.user?.id) {
      console.error("User is not logged in");
      return;
    }

    const { data, error } = await supabase
      .from("tabs")
      .insert([{ title: "New Tab", status: "Open", owner_id: session.user.id }]);

    if (error) {
      console.error("Error creating tab:", error);
    } else {
      setTabs([...tabs, ...(data || [])]); // Append new tab to state
    }
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>
      <button onClick={createTab}>Create a New Bar Tab</button> {/* ✅ Fixed */}

      <h2>Your Tabs:</h2>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            {tab.title} - {tab.status}
          </li>
        ))}
      </ul>
    </div>
  );
}