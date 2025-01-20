'use server'
import { google } from 'googleapis';

export async function GetGoogleSheetAccess() {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'account-secret.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
}