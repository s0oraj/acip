const API_BASE_URL = 'https://pattern-tracker-production.up.railway.app/api';

export const apiService = {
  // Question completion endpoints
  async getCompletedQuestions(): Promise<number[]> {
    const response = await fetch(`${API_BASE_URL}/completed-questions`, {
      credentials: 'include'  // Important for sending cookies
    });
    if (!response.ok) throw new Error('Failed to fetch completed questions');
    return response.json();
  },

  async toggleQuestionCompletion(questionId: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/completed-questions/${questionId}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) throw new Error('Failed to toggle question completion');
  },

  // Auth endpoints
  async getCurrentUser(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/user`, {
      credentials: 'include'
    });
    if (!response.ok) return null;
    return response.json();
  },

  initiateGoogleLogin() {
    window.location.href = `${API_BASE_URL}/oauth2/authorization/google`;
  },

  async logout(): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Failed to logout');
  }
};
