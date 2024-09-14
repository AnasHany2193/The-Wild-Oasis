import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eowiyzkrsazfytzbutav.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvd2l5emtyc2F6Znl0emJ1dGF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNTE3MDMsImV4cCI6MjA0MTgyNzcwM30.Uo-qJnFOU-h8vb-K0kM_VySrJjdvK-ukUvo1fuA96CQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
