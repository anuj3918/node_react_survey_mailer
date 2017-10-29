function localtunnel {
  lt -s anuj3918emaily --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done