CREATE OR REPLACE FUNCTION increment_usage_count()
RETURNS integer
LANGUAGE SQL
AS $$
  UPDATE background_remover_emails
  SET usage_count = usage_count + 1
  WHERE email = auth.current_user()
  RETURNING usage_count;
$$;