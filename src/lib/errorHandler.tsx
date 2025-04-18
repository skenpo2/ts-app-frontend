import axios from 'axios';
import { toast } from 'sonner';

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred';

    if (!error.response) {
      toast.error('Network error. Please check your internet connection.');
      return;
    }

    switch (status) {
      case 400:
        toast.error(message || 'Invalid request');
        break;
      case 401:
        toast.error('Unauthorized: Please log in again');
        break;
      case 403:
        toast.error('Forbidden: You do not have permission');
        break;
      case 404:
        toast.error('Resource not found');
        break;
      case 500:
        toast.error('Server error. Please try again later.');
        break;
      default:
        toast.error(message);
    }
  } else {
    toast.error('An unexpected error occurred.');
  }
};
