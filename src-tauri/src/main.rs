// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use screenshots::Screen;
use std::fs;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn screenshot(x: i32, y: i32, width: u32, height: u32) {
    let screen = Screen::from_point(0, 0).unwrap();
    let image = screen.capture_area(x, y, width, height).unwrap();
    let buffer = image.buffer();
    fs::write("target/screenshot.png", buffer).unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![screenshot])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
