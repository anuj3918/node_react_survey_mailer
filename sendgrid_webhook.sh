function localtunnel {
  lt -s MY_UNIQUE_USERNAME --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done