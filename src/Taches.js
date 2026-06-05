import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://kupdycdxbjsxcippsdwq.supabase.co'
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1cGR5Y2R4YmpzeGNpcHBzZHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0Njk4MDMsImV4cCI6MjA5NjA0NTgwM30.MZZtKKAL-ES2OcIzDQi-rq2CdIyO2Y3B7j_y_be-SBE'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
