"use client"

import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Button,
    Divider,
    Grid,
    Fade,
    Zoom,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { MessageCircle, Copy, Check } from 'lucide-react';
import Image from 'next/image';

const PaymentInstructionsPage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [showContent, setShowContent] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    const handleCopy = async (text: string, field: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedField(field);
            setTimeout(() => setCopiedField(null), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const paymentDetails = [
        { label: 'GPay Number', value: '9876543210', field: 'gpay' },
        { label: 'UPI ID', value: 'yourname@upi', field: 'upi' },
    ];

    const accountDetails = [
        { label: 'Account Name', value: 'Zaam Jobs' },
        { label: 'Account Number', value: '1234567890', field: 'account' },
        { label: 'IFSC Code', value: 'HDFC0001234', field: 'ifsc' },
    ];

    const upiApps = [
        { name: 'GPay', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
        { name: 'PhonePe', logo: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
        { name: 'Paytm', logo: 'https://images.pexels.com/photos/6801875/pexels-photo-6801875.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
        { name: 'BHIM', logo: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
        { name: 'Amazon Pay', logo: 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                py: { xs: 2, md: 4 },
            }}
        >
            <Container maxWidth="md">
                <Fade in={showContent} timeout={800}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography
                            variant={isMobile ? 'h4' : 'h3'}
                            component="h1"
                            color="primary"
                            gutterBottom
                            sx={{ fontWeight: 700 }}
                        >
                            Complete Your Payment
                        </Typography>
                        <Typography
                            variant={isMobile ? 'h5' : 'h4'}
                            color="secondary"
                            sx={{ fontWeight: 600 }}
                        >
                            INR 199
                        </Typography>
                    </Box>
                </Fade>

                <Grid container spacing={3}>
                    {/* QR Code Section */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Zoom in={showContent} timeout={1000} style={{ transitionDelay: '200ms' }}>
                            <Card
                                elevation={3}
                                sx={{
                                    height: '100%',
                                    borderRadius: 2,
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        Scan to Pay
                                    </Typography>

                                    {/* QR Code Placeholder */}
                                    <Box
                                        sx={{
                                            width: '200px',
                                            height: '200px',
                                            mx: 'auto',
                                            mb: 2,
                                            backgroundColor: '#f0f0f0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 2,
                                            border: '2px dashed',
                                            borderColor: theme.palette.primary.main,
                                        }}
                                    >
                                        <Image
                                            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=yourname@upi&pn=Zaam%20Jobs&am=199&cu=INR"
                                            alt="Scan to Pay"
                                            width={180}
                                            height={180}
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    </Box>

                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        Scan with any UPI app to pay
                                    </Typography>

                                    {/* UPI Apps Icons */}
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                                        {upiApps.map((app, index) => (
                                            <Box
                                                key={app.name}
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 1,
                                                    overflow: 'hidden',
                                                    border: '1px solid',
                                                    borderColor: theme.palette.divider,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: '#fff',
                                                    transition: 'transform 0.2s ease-in-out',
                                                    '&:hover': {
                                                        transform: 'scale(1.1)',
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 32,
                                                        height: 32,
                                                        borderRadius: '50%',
                                                        backgroundColor: index === 0 ? '#4285F4' :
                                                            index === 1 ? '#5F259F' :
                                                                index === 2 ? '#00BAF2' :
                                                                    index === 3 ? '#097939' : '#FF9900',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#fff',
                                                        fontSize: '10px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {app.name.charAt(0)}
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>

                    {/* Payment Details Section */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Zoom in={showContent} timeout={1000} style={{ transitionDelay: '400ms' }}>
                            <Card
                                elevation={3}
                                sx={{
                                    height: '100%',
                                    borderRadius: 2,
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        Payment Details
                                    </Typography>

                                    {paymentDetails.map((detail) => (
                                        <Box key={detail.field} sx={{ mb: 2 }}>
                                            <Typography variant="body2" color="text.secondary">
                                                {detail.label}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="body1" sx={{ fontWeight: 500, flex: 1 }}>
                                                    {detail.value}
                                                </Typography>
                                                <Button
                                                    size="small"
                                                    onClick={() => handleCopy(detail.value, detail.field)}
                                                    sx={{ minWidth: 'auto', p: 0.5 }}
                                                >
                                                    {copiedField === detail.field ? (
                                                        <Check size={16} color={theme.palette.success.main} />
                                                    ) : (
                                                        <Copy size={16} />
                                                    )}
                                                </Button>
                                            </Box>
                                        </Box>
                                    ))}

                                    <Divider sx={{ my: 2 }} />

                                    <Typography variant="h6" color="primary" gutterBottom>
                                        Account Details
                                    </Typography>

                                    {accountDetails.map((detail, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body2" color="text.secondary">
                                                {detail.label}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography variant="body1" sx={{ fontWeight: 500, flex: 1 }}>
                                                    {detail.value}
                                                </Typography>
                                                {detail.field && (
                                                    <Button
                                                        size="small"
                                                        onClick={() => handleCopy(detail.value, detail.field)}
                                                        sx={{ minWidth: 'auto', p: 0.5 }}
                                                    >
                                                        {copiedField === detail.field ? (
                                                            <Check size={16} color={theme.palette.success.main} />
                                                        ) : (
                                                            <Copy size={16} />
                                                        )}
                                                    </Button>
                                                )}
                                            </Box>
                                        </Box>
                                    ))}
                                </CardContent>
                            </Card>
                        </Zoom>
                    </Grid>
                </Grid>

                {/* Instructions Section */}
                <Fade in={showContent} timeout={1200} style={{ transitionDelay: '600ms' }}>
                    <Card
                        elevation={2}
                        sx={{
                            mt: 3,
                            borderRadius: 2,
                            backgroundColor: theme.palette.background.paper,
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" color="primary" gutterBottom>
                                Next Steps
                            </Typography>
                            <Typography variant="body1" color="text.primary" sx={{ mb: 3, lineHeight: 1.6 }}>
                                After completing your payment, please send the payment screenshot to our WhatsApp number{' '}
                                <strong>+91-9876543210</strong>. Once verified, your account will be activated.
                            </Typography>

                            <Button
                                variant="contained"
                                size="large"
                                fullWidth={isMobile}
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    backgroundColor: '#25D366',
                                    color: '#fff',
                                    py: 1.5,
                                    px: 4,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: '#128C7E',
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.2s ease-in-out',
                                }}
                                startIcon={<MessageCircle size={20} />}
                            >
                                Send Screenshot on WhatsApp
                            </Button>
                        </CardContent>
                    </Card>
                </Fade>

                {/* Disclaimer */}
                <Fade in={showContent} timeout={1400} style={{ transitionDelay: '800ms' }}>
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontStyle: 'italic',
                                p: 2,
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1,
                                border: `1px solid ${theme.palette.divider}`,
                            }}
                        >
                            <strong>Note:</strong> Activation may take up to 24 hours after payment confirmation.
                        </Typography>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
};

export default PaymentInstructionsPage;