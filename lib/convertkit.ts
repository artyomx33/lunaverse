/**
 * ConvertKit Integration Service
 * Handles email capture and form submissions
 */

const CONVERTKIT_API_URL = "https://api.convertkit.com/v3";
const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;

export interface EmailSubscribeRequest {
  email: string;
  first_name?: string;
  fields?: {
    [key: string]: string;
  };
  tags?: number[];
}

export interface EmailSubscribeResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Subscribe user to ConvertKit form
 */
export async function subscribeToConvertKit(
  data: EmailSubscribeRequest
): Promise<EmailSubscribeResponse> {
  if (!FORM_ID || !API_KEY) {
    console.error("ConvertKit credentials not configured");
    return {
      success: false,
      error: "Email service not configured",
    };
  }

  try {
    const payload = {
      email: data.email,
      first_name: data.first_name || "",
      fields: data.fields || {},
      tags: data.tags || [14455], // Luna-Verse tag by default
    };

    const response = await fetch(
      `${CONVERTKIT_API_URL}/forms/${FORM_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        error: error.message || "Failed to subscribe",
      };
    }

    const result = await response.json();
    return {
      success: true,
      message: "Successfully subscribed to Luna-Verse emails",
    };
  } catch (error) {
    console.error("ConvertKit subscription error:", error);
    return {
      success: false,
      error: "An error occurred. Please try again.",
    };
  }
}

/**
 * Get form details from ConvertKit
 */
export async function getFormDetails() {
  if (!FORM_ID || !API_KEY) {
    return null;
  }

  try {
    const response = await fetch(
      `${CONVERTKIT_API_URL}/forms/${FORM_ID}?api_key=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch form details:", error);
    return null;
  }
}
