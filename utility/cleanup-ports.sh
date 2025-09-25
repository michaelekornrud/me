#!/bin/bash

# Cleanup script for development server ports
echo "Checking for processes on common development ports..."

# Check common ports (3000, 3001, 8000, 8080)
for port in 3000 3001 8000 8080; do
    pids=$(lsof -ti :$port 2>/dev/null)
    if [ ! -z "$pids" ]; then
        echo "Found processes on port $port: $pids"
        echo "Killing processes on port $port..."
        echo $pids | xargs kill -9
        echo "Port $port cleaned up"
    else
        echo "Port $port is free"
    fi
done

echo "Cleanup complete!"
