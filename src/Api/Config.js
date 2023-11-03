import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://khbenkbqigsocavtzsri.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoYmVua2JxaWdzb2NhdnR6c3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2OTkxNzcsImV4cCI6MjAxNDI3NTE3N30.SnNCmLNBAptqM09Ya9RIJNNbRY6yqcQKLYZQVw8LG3k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);